import axios from "axios";
export default class Api {
  static axiosInstance = axios.create({
    baseURL: "http://54.92.221.142/museumplay/gr",
    timeout: 1000,
    
  });

  static getCount(val) {
    const params = {
      type: "query",
      operation: "getCount",
      variables: val, // val을 그대로 사용
      getData: "data",
    };
    const gpqParams = this.gql(params); // this.gql 대신 Util.gql 사용

    // Promise를 반환하여 비동기 결과를 반환하도록 수정
    return this.axiosInstance
      .post("/", gpqParams)
      .then((res) => {
        console.log(res.data);
        return res.data; // 요청 결과 반환
      })
      .catch((error) => {
        console.error(error);
        throw error; // 에러를 던져 호출자에서 처리 가능하게 함
      });
  }

  static getVisitUser(val) {
    const params = {
      type: "query",
      operation: "getVisitUser",
      variables: val,
      getData: "data",
    };
    const gpqParams = this.gql(params);
    return this.axiosInstance
      .post("/", gpqParams)
      .then((res) => {
        return res.data.data[params.operation]; // 요청 결과 반환
      })
      .catch((error) => {
        throw error; // 에러를 던져 호출자에서 처리 가능하게 함
      });
  }

  static getUser(val) {
    const params = {
      type: "query",
      operation: "getUser",
      variables: val,
      getData: "data",
    };
    const gpqParams = this.gql(params);
    return this.axiosInstance
      .post("/", gpqParams)
      .then((res) => {
        return res.data.data[params.operation]; // 요청 결과 반환
      })
      .catch((error) => {
        throw error; // 에러를 던져 호출자에서 처리 가능하게 함
      });
  }

  static gql(params) {
    const operation = params.operation;
    const queryType = params.type;
    const getData = params.getData;
    const variables = params.variables;
    let queryStr = queryType + " " + operation + " { " + operation;

    if (Object.keys(variables).length > 0) {
      queryStr += "( ";
      for (let key in variables) {
        // if(typeof variables[key] === 'boolean' || typeof variables[key] === 'number') {
        //     queryStr += key + ': ' + variables[key] + ' ';
        // }
        if (typeof variables[key] === "string") {
          queryStr += key + ': "' + variables[key] + '" ';
        } else if (typeof variables[key] === "object") {
          let jsonStr = JSON.stringify(variables[key]);
          jsonStr = jsonStr.replace(/\"([^(\")"]+)\":/g, "$1:");

          queryStr += key + ": " + jsonStr + " ";
        } else {
          queryStr += key + ": " + variables[key] + " ";
        }
      }
      queryStr += ") ";
    }
    queryStr += " {" + getData + "}}";

    const gpqParams = {
      operationName: operation,
      query: queryStr,
      variables: {},
    };

    return gpqParams;
  }
}
