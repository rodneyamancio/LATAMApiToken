var jwt = require('jsonwebtoken');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const request = require('request')

app.use(bodyParser.json());

app.get('/dev/mmlogistica', function(req, res) {

  var GOOGLE_APPLICATION_CREDENTIALS = {
    client_email: "pubsub-publish@bc-os-logistica20-dev-i775.iam.gserviceaccount.com"
  };

  GOOGLE_APPLICATION_CREDENTIALS.private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDa9aUYuWrn1Kxq\nlzUFXGphyXXMJ0ImvxfT0y3fudl4wF2jndrUH2enKUVIXO2FMcb/QfrSpXYnM55f\nXm0s2osvlQfG2j/aPGdtWIOa+OTwHxNvF6zdagYxu4MjfJNMKF3pBfq7JrojfOyY\nxs1QHzG0KZ/eFtCePKYCYTmLJa1r1ytsecpywZucKxz0qe3BEUqTpzFeqgcSIX9e\nxmhpfdwIY7ZJbIKYCxlqXtE2Ny4kZKWLNMN/gYI/E6LIgZp0uki3RvE8Nh4bcL5X\ny6JmnnI3wYG/YDJh4xywPKAIzKMcZVJwXXRDSfsFEgecWZToPNbslEcVfIhhkTGr\nZjluQa9jAgMBAAECggEAIzz3oigrsNNfdii54zrRchsH3AsQuzHzezyC0afUJySf\noqEud7H1hAer0JldWRtpi74KHal8VOhv8Kg+iMKZNiyqsObXR4ouGQEZmQYSY3nq\nLkL7UoeUJ0p8Bejavx3F/fu03ja9gSWYjCkpH1+4fOawBaraoy9ehjEwdMOOX+As\n++f0ttAUHE8WgLsgX+5WZEF+coPAngN8EMRpU10+X9fq7gdWfhaAhfHtXn6QVoAr\nJjmawg3aRFVF2P+hL/vUHr27LPVk8rHm3zPlONA8PL2wNY5UmWjuoOUjzWcRJUEl\nAEWHXtl9d+mEx9mCJ+nWS9Id0aiDx2oj/nduyyzqFQKBgQD2ejszAO49nzzEX0rO\ns0iLnyz1BMJYGm++YvqkXi8mT7PFhf6JzVKeiiMheNwI0HsmNHlrOKuPUTMGwczj\naB+tqqiL0+hqHfZpgOqggkMmL0axceycyfM/H/mCs+bb2fWZTVmbpSWUjbNTFm6b\nFeHp4RyxqpPMKevbWNq1zQkK7wKBgQDjaz/kKWIPQKxWzMLQztBIWRVVGrM7kX61\nRCnK/92YzrLoO62mEig1gxhLYI7aZhdz4Yhg1S8PPvkTQmxpnXEzBKUdBiJQtCTW\nAxJVdIZYmCvbu5SQ7W4VJG+MMU5UF/UivOPjg8YtUgckwXEZK7hz5VBUGnGS4USg\nwPSnYTLyzQKBgGzhrDsowxXXvUlmay6KhpafN4X5lzzCWPC62sw3iw6akOjF+562\nZDQDA+fqcxE1v+EttyGFhEwoa6klfbRLsArQ4+n5L6eJGuyadYt4X9+DbPBASm0s\nzVbqcheqD2a5j0QsplQajVJlkn024J+D+CuQNVPK7cV4E2fvhZZgQAljAoGAAv+G\n+BsTj9/qZbqNVvNjC5EhFt4jPsXMRdeANYzp/vm6ohUnVOkoXow75cKAH6D47i4q\n/hvRYwIRho95nmrU8zc8dgV+rlGxqqCfvUCsBL781QjEDKUUrnKshcygm7s1ICAd\nYQJ7ul06euGR/CL3a4+6X2F53dXaccQZdZtycIECgYEAqCKXk+nPZ9ZsFRwnO7ZH\nE4K5mfeEvErpD8rtq++D3PAB7PmR+VMZgo0cCH/ZkgTlQDuu3gi1IlFikrQOJdaq\nvpIX1UTiM3zXfA8xRvrGN8Z4RV0W1HMo6sX+6EkTrzY3I52ZdyIRQwmZj6Q8OP7G\nKaTcJKc/9ubMzVOPE8JFp6c=\n-----END PRIVATE KEY-----\n";
      
    var jwtObject = {
      iss: GOOGLE_APPLICATION_CREDENTIALS.client_email,
      scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/pubsub",
      aud: "https://oauth2.googleapis.com/token"
    };
    var grant_type = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
    var cert = GOOGLE_APPLICATION_CREDENTIALS.private_key;
    var token = jwt.sign(jwtObject, cert, {
      algorithm: 'RS256',
      expiresIn: '1h'
    });
    
    res.send(token);
    
});

  app.get('/qas_qas/mmlogistica', function(req, res) {
    var GOOGLE_APPLICATION_CREDENTIALS = {
      client_email: "pubsub-publish@bc-os-logistica20-intg-dlh5.iam.gserviceaccount.com"
    };
  
    GOOGLE_APPLICATION_CREDENTIALS.private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDrUpKcuspCEBy7\nr216GF8dN0dq6iJTDpssgAOt9U5ICyrozb2O9Fa3oQu5a4WduIh50Dff/AQxT2/f\nVGHbyVFq2lMrGjObdWL5xlA51u+n6fZ5bD92ud5qFrEh6PhqkDPjoHeSBba+NxkB\n/RtoM5/qjdv5IuxUFS+uf5eahj1OOhACD4NuCXFBAAeEQVAAL/gnsIBVKwavNZCZ\noZq3aSY2cnAlaDTm/ulXqFNK0Jig5M3EmDemHzgsw53XBRhuaSjOngHN/QSE+otr\nHFNDMNYovNDjoTPi/6l6YUFdvAQaY3hVzSzzl1InSCfOyrGR0SHQi1Rx4BtyrXSr\nSs64jwd5AgMBAAECggEACvMlKlDQv4EzbRJNJEzFBD2Bv7pUTYwU8V2lji8nbNfE\nL9/+7Yt2C4ZdXsvfhEbFZvGm3+/AnDDHkltBUHJOLQwqqYtHEnlEWT3+lqpnLWeI\nFf9Q9qvQaxxSMrM99+ts1q8tUSid57z1l2+ZGmColMf0D+Qtnf38YYDDY6fSa3TW\nWJIFoGJvJgR3RSb77Ij56YFodPkXBtujaRnXAX87UP4e3NWG54KdDkosMqjP1ON4\njp6mz2Y/6OQVzF2v1h00/h5PCmd1NwuwjL7+SuV2kMB/rZGhAd9M0opkFC+EB3hm\n2dYEMWyovJMSyVWs77zRuEzGIRLXBASYkQn7YUnwQQKBgQD5e9XrFw4bC4/sKFsk\n8Ssvha/c74h1R/NY6WUVYZkgqxGK57fpRrGqVaa5QkJK0uu0rDQrxmaZ8DqM/Kf5\n02rgQvGrsOtdWgCx6agaZLOrWrzZvpRiX84aTZKhECXb3vtfR6jcFCuaUyX9x/qw\nnN/I6Cwz+aq/B6SZ926vHIjUyQKBgQDxeAx/lTlp5g4oPC/zxvUhvs/TV2bhfopZ\nNKTGiOAHilWd2MrNkymQBqVteJV7dKB0C6e26f/yt/CO3QJlhDKduccEv/h1YuS6\niMD9US7DR0yzLtijYgIcuZzAPSqveUhBKZqjcNTZg6ShnleZafyvEg1owwJFYuHa\ncHzD35NlMQKBgCcdTj2sgK6m0mrBLQEOuqmZuSfXejqBDFsdRJbklWB00axIhiIR\nzlsZUKltBP28Me5CrW9LjNyHuHZQSnm1tuTwOfmkJFKfgMpkCtIQhcbQ1BkDczo1\nMRgYn2uXH4hoXlri3kua8fchICy4xMoZ3lAeboe7lhSbOyhUjcrwm1dZAoGAJxea\nXmVYQC7Ah/8GfF7vfKEZoEt8GnGUEFEXhBTQwCfDKKTaYGG8ztZknc5x1OTSvTbN\n1i0YBMGGrnpVUv4N+78B22EA5nA2O4S8ScaE3ZSDdFbXN8w8L05VdEHy0Sm/at1D\nbcZsjzJiys+JuwqPoAA6L4Wyrm0Nx4GCkWt2v2ECgYAifaT8BG1Gq/W0s1iAEvzF\nWjtWM9zfXxBSf4taRMJTl7qo9c2HC5VucopeC6tTZRWl78BMfa1chipBaNL/mPeD\noPVAaTsEvYotAV/QzIsllXxd3e3beVkOwNBbJ5Rxc4tU4IGoK1rTxowiU3uVNBPi\n5zVASFeBgmJdZVOGqyaIzQ==\n-----END PRIVATE KEY-----\n";
        
      var jwtObject = {
        iss: GOOGLE_APPLICATION_CREDENTIALS.client_email,
        scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/pubsub",
        aud: "https://oauth2.googleapis.com/token"
      };
      var grant_type = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
      var cert = GOOGLE_APPLICATION_CREDENTIALS.private_key;
      var token = jwt.sign(jwtObject, cert, {
        algorithm: 'RS256',
        expiresIn: '1h'
      });

      request.post('https://oauth2.googleapis.com/token', {
        form: {
          grant_type: grant_type,
          assertion: token
        }
      }, (error, response, body) => {
        if (error) {
          console.error(error)
          return
        }
        //res.send(body);
        //console.log(`statusCode: ${res.statusCode}`)
        //console.log(body)
        var bodyJson = JSON.parse(body)
        access_token = bodyJson.access_token
        console.log(access_token)
        res.send(access_token)

      })

  });

  app.get('/qas/mmlogistica', function(req, res) {
    var GOOGLE_APPLICATION_CREDENTIALS = {
      client_email: "pubsub-publish@bc-os-logistica20-prod-5ogd.iam.gserviceaccount.com"
    };
  
    GOOGLE_APPLICATION_CREDENTIALS.private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDdyn/4AO5iihPz\n8Ru6lL7CDGiKD9aMN5qe4iCI4gkd7ZFnQpldofPWf5KthpMG4l1v8eLmvQKoAjZi\nJtWuE/3pmYzWh458QqZg3bSGl86ETn4pZbaUbl9Q4AxvnykIU+0QZ3T1Jdj3GIQV\nUS3iSEHdlhNUGMspSOdgP70CVb8ysbOgXP6/LuizzXF1OAN/cEB6NHexMklyllzS\n8JS1SkcG/niy14xTjBn4Y0XzIDa/JpoO4EcD60Y//LnhlyJKuhBethepkgbKGSX4\nac6oW+VwUC1cjloO5x6UyfMn0VjiDQudtXkjClwVwt0Pd+1D5ooHT2kZVVGJBcgf\nzLrFqs3xAgMBAAECggEAChEgRdgk+daymSafJOo4zlip1g+/TpX82qwA4LWscZil\nj5OiSnGzaPpZZK7wYCZI1MVHO0SQ/kyQvgZtOdLbz408q0Vz3jKtl+/4OwkLl/hy\nxDDtsfG15IHcOU92w/4Ai0y8Lkm4KLRgKmeI4aB4p4oho8uMTSTApnRo1oD122Md\nKMwuUk1eoPjtiz6XSOwZ9RuMAwBjQIM2WyzGNwvJaCOuCsJcB570VnkWG5X3EEzI\n9q42xHLmpSUbjxuqmNV/2191eWHmxOgQyCBB8XZx3C86MbF3rK/P6wn2NGf3B/Mr\n5aVfnCJDzRPa7o6pnAsENN5nPWnxS8wJwoA3BGlukQKBgQD2ViDxzb0FgWAuFlb0\ny16JZEVqHM9DCoSD0L8MW1c5pbQgb5wzKgwcwdFNIZMNAyIcP32McTej0Jty29zB\nv9s9vUnOSLy8Xykx8CRJ2PLN/H7+QA1ra8Tx3Cxmmp3uL30X6GFZ6Ir9sbOlF2cj\nj2JUoHLO/fAAc6y5wnVYC6tjMwKBgQDmfd649t1TN75JjVcHZshfqMt//gjBQGJ/\nTPfsxS4bnXBeImE0RdCo3b+XVzmg/apr10JcQGZCKJo++LasWNUf5RFVlXDfzksl\neL+pJtBsBiPw9EG0KRZNwJnFJb327OTDVF99E41COEF6FcM0apDPLB3EzvzHWjIj\nQm93cRhKSwKBgBp92L0oaxOUfkt2i5N364rLBcwLnR6Qmv+yC1nA2PiSIXT7i8jU\n1Mii72dkHPRhSeHP0iiwZFNxs8X+bxdHEsTo/m7405NOiJeeQ8jNVA9jACVHrinH\nRT7ddsjyB9n9sW5Ix29r2sa9vZwbkDP6z5BaUP6BwLXLut+fUg9N8fiRAoGADit8\nzsg2cRBDPYhX6leSR/c7k4HNjfvkUkksEL1KiV4Tc2YPrcQBAPCo/6fYHiKaIIka\nRkubPcP7P5XQvSW07IILn8RRLSEkk4gp2D9PnuR9vyl1BJtmCJ+nlGwukoibw7pj\nKHBURdbph5Tg7E8E2gevSNMkzSipXmuOKLymLqMCgYEA0dCy1EYtSNf5JPXdRBSZ\nWTabNwj6W+rE6UKFrwAqMiyJ5ob7dfMJdkdv4wBYfbcMDl8opGC8y+KhAPTrUNhP\n0vW5zDCpplo3g2/iXEEu1D5ICLSAQZ4OuQ2nNHst1AD5actp331nrW7i9k2P69Ij\ntn9bJ2Z1VDQR/B4M+TmLeWY=\n-----END PRIVATE KEY-----\n";
        
      var jwtObject = {
        iss: GOOGLE_APPLICATION_CREDENTIALS.client_email,
        scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/pubsub",
        aud: "https://oauth2.googleapis.com/token"
      };
      var grant_type = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
      var cert = GOOGLE_APPLICATION_CREDENTIALS.private_key;
      var token = jwt.sign(jwtObject, cert, {
        algorithm: 'RS256',
        expiresIn: '1h'
      });

      request.post('https://oauth2.googleapis.com/token', {
        form: {
          grant_type: grant_type,
          assertion: token
        }
      }, (error, response, body) => {
        if (error) {
          console.error(error)
          return
        }
        //res.send(body);
        //console.log(`statusCode: ${res.statusCode}`)
        //console.log(body)
        var bodyJson = JSON.parse(body)
        access_token = bodyJson.access_token
        console.log(access_token)
        res.send(access_token)

      })

  });  

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server listening on port %s', port);
});
