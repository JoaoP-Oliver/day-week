       function time() {
            let time = document.getElementById('time')

            let date = new Date()
            let hour = date.getHours()
            let min = date.getMinutes()
            let sec = date.getSeconds()
            let mil = date.getMilliseconds()
        

            time.innerHTML = `<p>${hour}:${min}:${sec}:${mil}</p>`
        }

        setInterval(() => {
                time()
            },10)

        function week() {
            let date = new Date()
            let day = date.getDay() //Captar dia da semana

            let dia = document.getElementById('day') 

            switch(day) {
                case 0:
                    console.log("Segunda-feira")
                    dia.innerText = "Segunda-feira"
                    break;
                case 1:
                    console.log("Terça-feira")
                    dia.innerText = "Terça-feira"
                    break;
                case 2:
                    console.log("Quarta-feira")
                    dia.innerText = "Quarta-feira"
                    break;
                case 3:
                    console.log("Quinta-feira")
                    dia.innerText = "Quinta-feira"
                    break;
                case 4:
                    console.log("Sexta-feira")
                    dia.innerText = "Sexta-feira"
                    break;
                case 5:
                    console.log("Sabado")
                    dia.innerText = "Sabado"
                    break;
                case 6:
                    console.log("Domingo")
                    dia.innerText = "Domingo"
                    break;
                default:
                    console.log('Dia da semana inexistente')
                    break;
            }
        }

        week()
