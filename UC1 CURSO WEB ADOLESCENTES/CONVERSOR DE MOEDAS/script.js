const dolarParaReal = 5.25;
            function converterMoeda() {
                const dollarInput = document.getElementById("dollar");
                
                const realInput = document.getElementById("real");
                
                const dollarValue = parseFloat(dollarInput.value);
                
                const realValue = dollarValue * dolarParaReal;
                
                realInput.value = realValue.toFixed(2);
                
            }