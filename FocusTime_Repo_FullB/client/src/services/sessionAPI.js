const API='http://localhost:5000/api/session';

async function request(url){
  return fetch(url,{method:'POST'}).then(r=>r.json());
}

export default {
  start:()=>request(`${API}/start`),
  pause:()=>request(`${API}/pause`),
  stop:()=>request(`${API}/stop`)
};
