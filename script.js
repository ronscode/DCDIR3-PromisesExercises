console.log("script.js has started...")

const axios = require('axios');

var urls = [
  'https://dog.ceo/api/breed/beagle/images/random',
  'https://dog.ceo/api/breed/chow/images/random',
  'https://dog.ceo/api/breed/akita/images/random',
  'https://dog.ceo/api/breed/dingo/images/random',
  'https://dog.ceo/api/breed/eskimo/images/random'
];

// Make a request for each dog image
console.log("Make a request for each dog image without arrow functions");

let dogPromise =
  axios.get(urls[0])
    .then(function (response) {
      // handle success
      console.log("1st dog good boyyee: " + response.data.message)
    }).then(function (response) {
      axios.get(urls[1])
        .then(function (response) {
          console.log("2nd pup best pup!" + response.data.message);
        }).then(function (response) {
          axios.get(urls[2])
            .then(function (response) {
              console.log("3nd pup best pup!" + response.data.message);
            }).then(function (response) {
              axios.get(urls[3])
                .then(function (response) {
                  console.log("4th best pupper is " + response.data.message)
                }).then(function (response) {
                  axios.get(urls[4])
                    .then(function (response) {
                      console.log("5th hecking best woofer is " + response.data.message)
                    })
                })
            })
        })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

console.log(dogPromise)




// Make a request for each dog image
console.log("Make a request for each dog image WITH arrow functions");

let dogPromiseArrows =
  axios.get(urls[0])
    .then(function (response) {
      // handle success
      console.log("1st arrow function dog good boyyee: " + response.data.message)
    }).then(function (response) {
      axios.get(urls[1])
        .then(response => {
          console.log("2nd arrow function pup best pup!" + response.data.message);
        }).then(response => {
          axios.get(urls[2])
            .then(response => {
              console.log("3nd arrow function pup best pup!" + response.data.message);
            }).then(response => {
              axios.get(urls[3])
                .then(response => {
                  console.log("4th arrow function best pupper is " + response.data.message)
                }).then(response => {
                  axios.get(urls[4])
                    .then(response => {
                      console.log("5th arrow function hecking best woofer is " + response.data.message)
                    })
                })
            })
        })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

console.log(dogPromiseArrows)
