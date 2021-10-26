class giftAuditionClass {
  constructor(auditionId) {
    this.baseUrl = `https://api.nicoad.nicovideo.jp/v1/giftaudition/${auditionId}`;
  }
  getDate(callback) {
    this.get(this.baseUrl, callback);
  }
  getParticipant(participantId, callback) {
    const targetUrl = `${this.baseUrl}/user/${participantId}`;
    this.get(targetUrl, callback);
  }
  get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
}
window.giftAudition = giftAuditionClass;
