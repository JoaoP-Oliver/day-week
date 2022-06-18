// Mostrar mensagem de boas vindas 
function welcome() {
            let date = new Date()
            let hour = date.getHours()
            let h1 = document.querySelector(`h1`)

            if(hour <= 12) {
                h1.innerHTML = `BOm DIa`
            }else if(hour <= 18 && hour >= 12) {
                h1.innerHTML = "Boa Tarde"
            }else if(hour <= 24 && hour >= 18) {
                h1.innerHTML = "Boa noite"
            }
        }
        welcome()

        // RELOGIO ======================
        function time() {
            let time = document.getElementById('time')

            let date = new Date()
            let hour = date.getHours()
            let min = date.getMinutes()
            let sec = date.getSeconds()

            time.innerHTML = `
            <p>${hour} horas<br/>
                ${min} minutos<br/>
                ${sec} segundos
            </p>`
        }
        setInterval(() => {
            time()
        }, 10)

        // Mostrar o dia da semana =============================
        function week() {
            let date = new Date()
            let day = date.getDay() //Captar dia da semana

            let dia = document.getElementById('day')

            switch (day) {
                case 0:
                    dia.innerText = "Segunda-feira"
                    break;
                case 1:
                
                    dia.innerText = "Terça-feira"
                    break;
                case 2:
                    
                    dia.innerText = "Quarta-feira"
                    break;
                case 3:
                    
                    dia.innerText = "Quinta-feira"
                    break;
                case 4:
                
                    dia.innerText = "Sexta-feira"
                    break;
                case 5:
                    dia.innerText = "Sabado"
                    break;
                case 6:

                    dia.innerText = "Domingo"
                    break;
                default:
                    console.log('ERROR 404')
                    break;
            }
        }
        week()
