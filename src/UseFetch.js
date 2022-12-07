[30.11 09:28] REITINGER Franz
    

import {​​​​​​​​ toRefs, reactive }​​​​​​​​ from'vue';
 
asyncexportfunctionuseFetch(url, options) {​​​​​​​​
//https://vuejs.org/api/reactivity-core.html#reactive

conststate = reactive({​​​​​​​​
error:null,
loading:false,
data:null,
ready:false,
  }​​​​​​​​);
/*
  https://medium.com/nerd-for-tech/fetch-api-async-await-in-a-few-bites-6b4f19f7db9e
*/
constfetchData = async () => {​​​​​​​​
state.loading = true;
console.log('Start fetching data ...');
try {​​​​​​​​
constres = awaitfetch(url, options);
//console.log('Result afer fetch:  ' + res.status);
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
if (res.status != 200) {​​​​​​​​
state.error="Status Code: " + res.status;
      }​​​​​​​​
else {​​​​​​​​
state.data = awaitres.json();
console.log(" done json")
      }​​​​​​​​
    }​​​​​​​​ catch (e) {​​​​​​​​
state.error = e;
    }​​​​​​​​ finally {​​​​​​​​
state.loading = false;
state.ready = true;
    }​​​​​​​​
  }​​​​​​​​;
 
fetchData();
//https://vuejs.org/api/reactivity-utilities.html#isref
return {​​​​​​​​ ...toRefs(state) }​​​​​​​​;
}​​​​​​​​

<https://teams.microsoft.com/l/message/19:TDIiykOFVxFZX2A0BbGtNTMkucaUck146Dt411VOjUE1@thread.tacv2/1669796919341?tenantId=b62e2550-8eae-4230-930f-e7f42353e12f&amp;groupId=f07368e9-df04-47ff-af54-b1a4251139c6&amp;parentMessageId=1669796919341&amp;teamName=2022_5AHIT_SYT_REFR&amp;channelName=Allgemein&amp;createdTime=1669796919341&amp;allowXTenantAccess=false>