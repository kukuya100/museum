import axios from "axios";

export default class Api {
  static baseUrl =
    process.env.NODE_ENV === "production"
      ? "http://localhost:1515/museumplay/"
      : process.env.BASE_URL
      ? process.env.BASE_URL
      : "http://localhost:1515/museumplay/";

  static linkBaseUrl =
    process.env.NODE_ENV === "production"
      ? "http://54.92.221.142/museumplay/goryeo-ro/" // server
      : process.env.LINK_BASE_URL
      ? process.env.LINK_BASE_URL 
      : "/";

  static axiosInstance = axios.create({
    baseURL: this.baseUrl + "gr",
    timeout: 10000, // 기존 1000ms → 10000ms로 변경 (요청 시간 증가)
  });

  static photoUrl = this.baseUrl + "photo/";

  static async sendRequest(params: any) {
    const gpqParams = this.gql(params);
    try {
      const response = await this.axiosInstance.post("/", gpqParams);
      return response.data.data[params.operation];
    } catch (error) {
      console.error(`[API ERROR] ${params.operation} 실패 ❌`);
      console.error("Error Message:", error.message);
      console.error("Error Code:", error.code);
      console.error("Request Config:", error.config);
      console.error("Response Data:", error.response ? error.response.data : "No response");
      throw error;
    }
  }

  static updateVisit(val: any) {
    return this.sendRequest({
      type: "mutation",
      operation: "updateVisit",
      variables: val,
      getData: "data",
    });
  }

  static updateUser(val: any) {
    return this.sendRequest({
      type: "mutation",
      operation: "updateUser",
      variables: val,
      getData: "data",
    });
  }

  static getCount(val: any) {
    return this.sendRequest({
      type: "query",
      operation: "getCount",
      variables: val,
      getData: "data",
    });
  }

  static getVisitUser(val: any) {
    return this.sendRequest({
      type: "query",
      operation: "getVisitUser",
      variables: val,
      getData: "data",
    });
  }

  static updateExplore(val: any) {
    return this.sendRequest({
      type: "mutation",
      operation: "updateExplore",
      variables: val,
      getData: "data",
    });
  }

  static exploreList(val: any) {
    return this.sendRequest({
      type: "query",
      operation: "exploreList",
      variables: val,
      getData: "docs, totalDocs, limit, page, nextPage, prevPage, totalPages, pagingCounter, meta",
    });
  }

  static getExplorerById(val: any) {
    return this.sendRequest({
      type: "query",
      operation: "getExplorerById",
      variables: val,
      getData: "data",
    });
  }

  static getDiscoveredArtifactById(val: any) {
    return this.sendRequest({
      type: "query",
      operation: "getDiscoveredArtifactById",
      variables: val,
      getData: "data",
    });
  }

  static getUser(val: any) {
    return this.sendRequest({
      type: "query",
      operation: "getUser",
      variables: val,
      getData: "data",
    });
  }

  static gql(params: any) {
    const operation = params.operation;
    const queryType = params.type;
    const getData = params.getData;
    const variables = params.variables;
    let queryStr = `${queryType} ${operation} { ${operation}`;

    if (Object.keys(variables).length > 0) {
      queryStr += "( ";
      for (let key in variables) {
        if (typeof variables[key] === "string") {
          queryStr += `${key}: "${variables[key]}" `;
        } else if (typeof variables[key] === "object") {
          let jsonStr = JSON.stringify(variables[key]);
          jsonStr = jsonStr.replace(/\"([^(\")"]+)\":/g, "$1:");
          queryStr += `${key}: ${jsonStr} `;
        } else {
          queryStr += `${key}: ${variables[key]} `;
        }
      }
      queryStr += ") ";
    }
    queryStr += ` { ${getData} }}`;

    return {
      operationName: operation,
      query: queryStr,
      variables: {},
    };
  }
}
