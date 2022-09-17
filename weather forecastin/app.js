let feedback1 = document.getElementById('input');
feedback1.addEventListener("keyup", () => { document.getElementById('feedback').style.display = 'none' })



// let button = document.getElementById("searchbutton");


var myfunc = document.getElementById("input");
myfunc.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        functionexe();
    }
});

function functionexe () {
    var value = document.getElementById('input').value;
    // console.log(value)

    if (value == "") {
        document.getElementById('feedback').style.display = 'flex';

    }

    else {
        try {
            console.log('working')
            let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ddd4fe361bc98bd7ee7bdf83fd4da229&units=metric`);
            data.then((res) => res.json()).then((res) => {
                data = res;
                document.getElementById('weatherCardID').style.display = 'flex';
                rendertohtml(data);

            }
            );
        }
        catch (error) {
            console.error(error);
        }

    }
}





function rendertohtml(data) {

    console.log(data.weather[0].description)
    document.getElementById('temperatureID').innerHTML = `Temperature In ${data.name}:${data.main.temp}`;
    document.getElementById('pressureID').innerHTML = `Pressure: ${data.main.pressure}:`;
    document.getElementById('weatherID').innerHTML = `Weather Description: ${data.weather[0].description}:`;
    document.getElementById('windID').innerHTML = `Wind speed: ${data.wind.speed}`;
    // document.getElementById('sunsetID').innerHTML += data.sys.sunrise/;
}
