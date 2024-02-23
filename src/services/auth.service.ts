

import {defineStore} from 'pinia'
import {computed, Ref, ref} from "vue";

const baseUrl : string = `${import.meta.env.VITE_API_URL}/api/v1/auth`;
const localStorageKey = 'token';

interface AuthTokenType {
    access_token: string;
    token_type: number;
    expires_in: string;
}

export const useAuthStore = defineStore('auth', () => {

    const tokenData:Ref<AuthTokenType> = ref(localStorage?.getItem(localStorageKey) ? JSON.parse(localStorage?.getItem(localStorageKey)||'{}') : {} as AuthTokenType);

    const isTokenEmpty = computed(() => {
        return tokenData.value?.access_token === undefined
    })

    const getTokenData = computed(() => tokenData.value)

    function getTokenFromApiRest(username: string, password: string) {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        return fetch(baseUrl + '/authenticate', {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            method: 'POST',
            headers:
            myHeaders
            ,
            body: JSON.stringify({
                "email": username,
                "password": password
            }),
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json().then(result => {
                        tokenData.value = result;
                        localStorage.setItem(localStorageKey, JSON.stringify(result))
                        return new Promise((resolve) => {
                            resolve(tokenData.value);
                        });
                    })
                        .catch(error => Promise.reject(() => {
                            removeTokenData()
                            return error;
                        }))
                } else {
                    return Promise.reject(() => {
                        removeTokenData();
                        return resp.status
                    })
                }
            })
            .catch(error => Promise.reject(() => {
                removeTokenData()
                return error;
            }))

    }
    function removeTokenData() {
        tokenData.value = {} as AuthTokenType;
        localStorage.removeItem(localStorageKey);
    }

    return {tokenData, getTokenFromApiRest, removeTokenData, isTokenEmpty, getTokenData}
});
