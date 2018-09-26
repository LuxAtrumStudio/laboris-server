import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

function parseTask(task: {title: string,
                          uuid: string,
                          doneDate: any,
                          dueDate: any,
                          entryDate: number,
                          modifiedDate: number,
                          projects: any,
                          tags: any,
                          status: string,
                          times: any}) {
  return {
    title: task.title,
    uuid: task.uuid,
    doneDate: task.doneDate,
    dueDate: task.doneDate,
    entryDate: task.entryDate,
    modifiedDate: task.modifiedDate,
    projects: task.projects,
    tags: task.tags,
    status: task.status,
    times: task.times,
    priority: 0,
  };
}

// interface Obj {
//   [key: string]: any
// }

export default new Vuex.Store({
  state: {
    userEmail: undefined,
    error: {login: '', register: ''},
    success: {login: '', register: ''},
    tasks: new Array(),
  },
  mutations: {
    setEmail(state, payload) {
      state.userEmail = payload;
    },
    setErrorLogin(state, payload) {
      state.error.login = payload;
    },
    setErrorRegister(state, payload) {
      state.error.register = payload;
    },
    setSuccessLogin(state, payload) {
      state.success.login = payload;
    },
    setSuccessRegister(state, payload) {
      state.success.register = payload;
    },
    setTask(state, payload) {
      state.tasks = payload;
    },
    appendTask(state, payload) {
      state.tasks.push(payload);
    },
    prependTask(state, payload) {
      state.tasks.unshift(payload);
    },
    sortTasks(state) {
      state.tasks.sort((a, b) => (a.urg > b.urg) ? 1 : ((b.urg > a.urg) ? -1 : 0));
    },
  },
  actions: {
    login({ commit }, payload): any {
      axios.post('/api/user/login', {username: payload[0], password: payload[1]}).then((res) => {
        if ('email' in res.data) {
          commit('setEmail', res.data.email);
          commit('setSuccessLogin', 'Successfuly logged in');
        } else {
          commit('setErrorLogin', res.data.error);
        }
      }).catch((err) => {
        commit('setErrorLogin', 'Unknown email or password');
      });
    },
    register({ commit }, payload): any {
      axios.post('/api/user/register', {email: payload[0], password: payload[1]}).then((res) => {
        if ('email' in res.data) {
          commit('setSuccessRegister', 'Successfuly created an account');
        } else {
          commit('setErrorRegister', res.data.error);
        }
      }).catch((err) => {
        commit('setErrorRegister', 'Server is offline, please try again later');
      });
    },
    logout({ commit }): any {
      commit('setEmail', undefined);
      axios.post('/api/user/logout');
    },
    delete({ commit }): any {
      commit('setEmail', undefined);
      axios.post('/api/user/delete');
    },
    loadTasks({ commit }): any {
      axios.get('api/task/pending').then((res) => {
        commit('setTask', res.data.map(parseTask));
      });
    },
  },
});
