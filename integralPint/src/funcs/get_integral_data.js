// module.exports = ctx => ({ query: ctx.query });
module.exports = {
    handler: async function (ctx) {
        let token
        let version
        let Knocknock_env = ctx.env === 'Production' ?'trpc://Production.trpc.knocknock.AuthCenter.AuthCenter' :  'trpc://Development.trpc.knocknock.AuthCenter.AuthCenter'
        let adminsvrenv = ctx.env === 'Production' ? 'trpc://Production.trpc.vap_oteam.delivery_admin_svr.PaySecProxySvr' : 'trpc://Development.trpc.vap_oteam.delivery_admin_svr.PaySecProxySvr'
        const { body, cgiRequest } = ctx;
        const { result: tokenRsp } = await cgiRequest({
            url: Knocknock_env, // trpc://{北极星命名空间}.{北极星名字}
            trpc: {
                uuid: 'trpc.authcenter_2022031803', // uuid用作协议编译及socket缓存key，如变更协议，需要同步修改该uuid
                json: require('./authcenter.proto'), // 协议文件
                func: '/trpc.knocknock.authcenter.AuthCenter/GetAuthInfo', // /package_name.service_name/req_name
                req: 'GetAuthInfoRequest', // 格式是pb协议中的：req_message
                res: 'GetAuthInfoResponse' // 格式是pb协议中的：res_message
            },
            data: {
                "body": {
                    "callerServerId": "8cbe7520-ca2c-4e4d-9512-c2e5fa90212e",
                    "callerServerPass": "80d3a0530c8271edec94582f4067d2cfae2a3c2cf657af8181e2c19bdabeefb6"
                }
            },
        });

        // 这里拿到的是一个map,key直接传被调服务id
        const tokenInfo = tokenRsp.body.authInfos["8179262c-c14e-47c4-bd19-f5286a79204a"]
        version = tokenInfo.token.version.toString()
        token = tokenInfo.token.token
        console.log('ree:', body.actid, body.point_id, body.uid)
        const { result } = await cgiRequest({
            url: adminsvrenv, // 正式:Production 测试:Development
            trpc: {
                uuid: 'trpc.vap_oteam.delivery_admin_svr_2022032302',
                json: require('./delivery_admin_svr.proto'),
                func: '/trpc.vap_oteam.delivery_admin_svr.PaySecProxySvr/GetPoint',
                req: 'GetPointReq',
                res: 'GetPointRsp'
            },
            data: {
                "transInfo": {
                    "knocknock_token": token,
                    "knocknock_skey_version": version,
                    "knocknock_caller_server_id": "8cbe7520-ca2c-4e4d-9512-c2e5fa90212e"
                },
                "body": {
                    "actid": body.actid,
                    "point_id": body.point_id,
                    "uid": body.uid
                },
            },
        });
        return result
    }
}