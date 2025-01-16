import { socialMediaData } from './data.js';

class PlatformGenerator {
  constructor(data) {
    this.data = data;
    this.initializeUI();
  }

  initializeUI() {
    this.generateBtn = document.getElementById('generate');
    this.outputDiv = document.getElementById('output');
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
      interaction: this.getRandomElement(this.data.interactionTypes)
    };

    const description = `
      <h3>New Platform Concept</h3>
      <p>A ${platform.type} platform for ${platform.demographic}, featuring ${platform.mainFeature}.</p>
      <p>Unique selling point: ${platform.uniqueElement}</p>
      <p>Primary content type: ${platform.contentFocus}</p>
      <p>Main interaction method: ${platform.interaction}</p>
    `;

    this.outputDiv.innerHTML = description;
  }
}

// Initialize the generator when the page loads
const generator = new PlatformGenerator(socialMediaData);