var encoder = {
  setMessage: function () {
    this.message = document.getElementById('message').value;
  },
  setPassword: function () {
    this.password = prompt('Enter a password for encryption');
  },
  setUrl: function () {
    this.url = 'localhost:4000/decode.html/?' + this.encrypt();
  },
  replaceMessageWithUrl: function () {
    document.getElementById('message').value = this.url;
  },
  encrypt: function () {
    var cypher = CryptoJS.AES.encrypt(this.message, this.password);
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8));
    return cypher;
  },
  protect: function () {
    encoder.setMessage();
    encoder.setPassword();
    encoder.setUrl();
    encoder.replaceMessageWithUrl();
  },
};

(function () {
  var encrypt = document.getElementById('encrypt');

  encrypt.addEventListener('click', encoder.protect, false);
}());
