        function week() {
            let date = new Date()
            let day = date.getDay()

            switch(day) {
                case 0:
                    console.log("Segunda-feira")
                    break;
                case 1:
                    console.log("Terça-feira")
                    break;
                case 2:
                    console.log("Quarta-feira")
                    break;
                case 3:
                    console.log("Quinta-feira")
                    break;
                case 4:
                    console.log("Sexta-feira")
                    break;
                case 5:
                    console.log("Sabado")
                    break;
                case 6:
                    console.log("Domingo")
                    break;
                default:
                    console.log('Dia da semana inexistente')
                    break;
            }
        }

        console.log(week())
