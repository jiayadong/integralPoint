const funcObj = {

  'get_integral_data' : {
    id: 'get_integral_data',
  },

  '/func/get_integral_data_GET' : {
    id: '/func/get_integral_data_GET',
  },

  'update_point_data' : {
    id: 'update_point_data',
  },

  '/func/update_point_data_GET' : {
    id: '/func/update_point_data_GET',
  },

}

const apis = Object.keys(funcObj);
export const callFunc =  (api, axiosOptions) => {
  if(!apis.includes(api)) {
    throw new Error(`api "${api}" is not exist`);
  }

  const utilsLoader = window.utilsLoader;
  if(!utilsLoader || !utilsLoader.load) {
    throw new Error(`window.utilsLoader is not defined.`)
  }

  const scfLoader = utilsLoader.load('scfLoader');

  if(!scfLoader) {
    throw new Error(`"scfLoader" is not defined in "window.utilsLoader"`)
  }

  return scfLoader.callFunc({
    debuging: true,
    funcName: api,
    host: "127.0.0.1:9998",
    projectId: "qb_prop_conf"
  }, axiosOptions);
}