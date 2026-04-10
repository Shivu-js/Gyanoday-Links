document.getElementById('share-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (navigator.share) {
        navigator.share({
            title: 'Gyanoday Ke Guruji',
            text: 'Gyanoday Ke Guruji | Trust of 26M+ Student on Youtube from UP & Other States Board',
            url: window.location.href
        }).then(() => {
            console.log('Shared successfully!');
        }).catch(console.error);
    } else {
        alert("Web Share API not supported in this browser.");
    }
});
