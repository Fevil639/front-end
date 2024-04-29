function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello world');
        }, 2000);
    });
}

function main() {
    return job();
}
main()
    .then(data => {
        console.log('Resolved data:', data); 
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });

