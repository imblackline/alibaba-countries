import { createStore } from "vuex";

export default createStore({
    state: {
        theme: "light",
    },
    mutations: {
        SET_THEME(state, newTheme) {
            state.theme = newTheme;
            localStorage.setItem("user-theme", newTheme);
            if (state.theme === "light") {
                document.documentElement.className = "lightmode";
            } else {
                document.documentElement.className = "darkmode";
            }
        },
        TOGGLE_THEME(state) {
            if (state.theme === "light") {
                state.theme = "dark";
                localStorage.setItem("user-theme", "dark");
                document.documentElement.className = "darkmode";
            } else {
                state.theme = "light";
                localStorage.setItem("user-theme", "light");
                document.documentElement.className = "lightmode";
            }
        },
    },
    actions: {},
    modules: {},
});
