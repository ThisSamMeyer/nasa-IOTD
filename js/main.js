//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=YzCjiqNZzPKiG1fPnnr4QgqMDMEMHwrKU7aBLkdY&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `${data.title}`
        document.querySelector('img').src = `${data.hdurl}`
        document.querySelector('h3').innerHTML = `Nasa image of the day from ${data.date}`
        document.querySelector('p').innerHTML = `${data.explanation}`
        if('copyright' in data){
            document.querySelector('span').innerHTML = `Copyright: ${data.copyright}`
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}