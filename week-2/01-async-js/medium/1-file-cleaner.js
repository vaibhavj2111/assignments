// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

    const fs = require('fs');
//Bro your code doesn't actually update the data of the file in the run time , it just overwrites the file and we see the change in the file content after the 
//code gets executed.
//So when i saw your code in which you've logged the data twice ( once after reading the file and once after writing) , I figured out the output of the 
//console.log was same both the times.This is because you are doing console.log(data) both the times without updating the data of a.txt between the asynchronous calls for reading and writing the file
//So here's the corrected code that does that for you !

    function readAndTrim(){
        fs.readFile('a.txt', 'utf-8', (err, data)=>{
            console.log("reading done");
            console.log(data);
            //updated data
            data = data.replace(/\s+/g, " ");
            //data passed as content 
            fs.writeFile('a.txt', data, (err)=>{
                console.log(typeof(data));
        
                console.log(data);// this data is the updated one
            });
        });
    }

    readAndTrim();
