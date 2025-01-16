import { socialMediaData } from './data.js';

class PlatformGenerator {
  constructor(data) {
    this.data = data;
    this.initializeUI();
    this.history = [];
  }

  initializeUI() {
    this.generateBtn = document.getElementById('generate');
    this.outputDiv = document.getElementById('output');
    this.historyDiv = document.getElementById('history');
    this.generateBtn.addEventListener('click', () => this.generatePlatform());
  }

  getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  generatePlatform() {
    const platform = {
      type: this.getRandomElement(this.data.platformTypes),
      demographic: this.getRandomElement(this.data.demographics),
      mainFeature: this.getRandomElement(this.data.features),
      uniqueElement: this.getRandomElement(this.data.uniqueElements),
      contentFocus: this.getRandomElement(this.data.contentTypes),
      interaction: this.getRandomElement(this.data.interactionTypes),
      monetization: this.getRandomElement(this.data.monetizationTypes),
      tech: this.getRandomElement(this.data.techStack)
    };

    this.addToHistory(platform);
    this.renderPlatform(platform);
  }

  addToHistory(platform) {
    this.history.unshift(platform);
    if (this.history.length > 5) {
      this.history.pop();
    }
    this.renderHistory();
  }

  renderPlatform(platform) {
    const description = `
      <div class="platform-card current">
        <h3>New Platform Concept</h3>
        <div class="platform-details">
          <div class="detail">
            <span class="label">Platform Type:</span>
            <span class="value">${platform.type}</span>
          </div>
          <div class="detail">
            <span class="label">Target Audience:</span>
            <span class="value">${platform.demographic}</span>
          </div>
          <div class="detail">
            <span class="label">Main Feature:</span>
            <span class="value">${platform.mainFeature}</span>
          </div>
          <div class="detail">
            <span class="label">Unique Element:</span>
            <span class="value">${platform.uniqueElement}</span>
          </div>
          <div class="detail">
            <span class="label">Content Focus:</span>
            <span class="value">${platform.contentFocus}</span>
          </div>
          <div class="detail">
            <span class="label">Interaction Type:</span>
            <span class="value">${platform.interaction}</span>
          </div>
          <div class="detail">
            <span class="label">Monetization:</span>
            <span class="value">${platform.monetization}</span>
          </div>
          <div class="detail">
            <span class="label">Technology:</span>
            <span class="value">${platform.tech}</span>
          </div>
        </div>
      </div>
    `;

    this.outputDiv.innerHTML = description;
  }

  renderHistory() {
    const historyHTML = this.history.slice(1).map(platform => `
      <div class="platform-card history">
        <h4>${platform.type} for ${platform.demographic}</h4>
        <div class="platform-details">
          <div class="detail">
            <span class="label">Main Feature:</span>
            <span class="value">${platform.mainFeature}</span>
          </div>
          <div class="detail">
            <span class="label">Unique Element:</span>
            <span class="value">${platform.uniqueElement}</span>
          </div>
        </div>
      </div>
    `).join('');

    this.historyDiv.innerHTML = historyHTML;
  }
}

// Initialize the generator when the page loads
const generator = new PlatformGenerator(socialMediaData);