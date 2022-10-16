import axios from 'axios';
export class Repository {
    url = "localhost";

    // login
    getLogin(email, password) {
        return new Promise((resolve, reject) => {
            axios.get( `http://${ this.url }:3000/auth`, {
                params: {
                    email: email,
                    password: password
                }
            })
                .then(x => resolve(x.data))
                .catch(err => {
                    alert(err);
                    reject(err);
                })
        });
    }
}