import { Buffer } from 'buffer';
import { AsyncStorage } from 'react-native';
const authKey = 'auth';
const userKey = 'user';

class AuthService {
    getAuthInfo(cb) {
        AsyncStorage.multiGet([authKey, userKey], (err, val) => {
            if (err) {
                return cb(err);
            }
            
            if (!val) {
                return cb();
            }
            
            
            var zippedObj = {
                'auth': val[0][1],
                'user': val[1][1]
            };
                        
            if (!zippedObj[authKey]) {
                return cb();
            }
            
            var authInfo = {
                headers: {
                    Authorization: 'Basic ' + zippedObj[authKey],
                    user: JSON.parse(zippedObj[userKey])
                }
            }
            return cb(null, authInfo);
        });
    }
    
    login(creds, cb) {
        console.log(creds.username);
        console.log(creds.password);
        var b = new Buffer(creds.username + ':' + creds.password);
        var encodedAuth = b.toString('base64');
        
        fetch('https://api.github.com/user', {
            headers: {
                'Authorization': 'Basic ' + encodedAuth
            }
        })
        .then((response)=>{
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            
            throw {
                badCredentials: response.status == 401,
                unknownError: response.status != 401
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            AsyncStorage.multiSet([
                ['auth', encodedAuth],
                ['user', JSON.stringify(results)]
            ], (err) => {
                if (err) {
                    throw err;
                }
                return cb({
                    badCredentials: false,
                    unknownError: false,
                    success: true
                });
            })
        })
        .catch((err) => {
            cb(err);
        });
    }
}

module.exports = new AuthService();
