var decoder = {
  getPassword: function () {
    this.password = document.getElementById('decrypt-field').value;
  },
  getEncryptedMessage: function () {
    this.encryptedMessage = window.location.search.substring(1);
  },
  getMessage: function () {
    this.message = this.decrypt();
  },
  replacePasswordWithMessage: function () {
    alert(this.message);
  },
  decrypt: function () {
    var decrypted = CryptoJS.AES.decrypt(this.encryptedMessage, this.password).toString(CryptoJS.enc.Utf8);
    console.log("Verified: " +
      CryptoJS.AES.decrypt(this.encryptedMessage, this.password).toString(CryptoJS.enc.Utf8));
    return decrypted;
  },
  reveal: function () {
    decoder.getPassword();
    decoder.getEncryptedMessage();
    decoder.getMessage();
    decoder.replacePasswordWithMessage();
  }
};

(function () {
  var decrypt = document.getElementById('decrypt');

  decrypt.addEventListener('click', decoder.reveal, false);
}());
