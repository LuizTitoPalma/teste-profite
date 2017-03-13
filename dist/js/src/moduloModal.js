var moduloModal = (function (window, document) {

    function callModal(output) {
        document.getElementById('whiteContent').innerHTML = output;
        document.getElementById('whiteContent').style.display = 'block';
        document.getElementById('blackOverlay').style.display = 'block';
        document.getElementById('closeModal').onclick = function () {
            moduloModal.closeModal();
        };
    }

    function closeModal() {
        document.getElementById('whiteContent').style.display = 'none';
        document.getElementById('blackOverlay').style.display = 'none';
    }
    
    return {
        callModal: callModal,
        closeModal: closeModal
    };

}(window, document));