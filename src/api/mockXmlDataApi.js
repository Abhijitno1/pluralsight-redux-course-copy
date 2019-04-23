import delay from './delay';

class XmlDataApi {
    static getDemoExamResult() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let data = `
            <xml-root>
              <bata atrib="ignore">this is non-useful extra data</bata>
              <nested-root>
                <result rollnum="10">
                  <subject id="1">80</subject>
                  <subject id="2">70</subject>
                  <subject id="3">60</subject>
                </result>
                <result rollnum="11">
                  <subject id="1">82</subject>
                  <subject id="2">75</subject>
                  <subject id="3">64</subject>
                </result>
                <result rollnum="12">
                  <subject id="1">48</subject>
                  <subject id="2">47</subject>
                  <subject id="3">50</subject>
                </result>
              </nested-root>
            </xml-root>
          `;
          resolve(data);
        }, delay);
      });
    }
}

export default XmlDataApi;