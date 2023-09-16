import { Injectable } from '@angular/core';
import { OpenAIApi } from 'openai';
import { Configuration } from 'openai/dist/configuration';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: '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',
  });
  constructor() {
    this.openai = new OpenAIApi(this.configuration);
  }
  generateText(prompt: string): Promise<string | undefined> {
    return this.openai
      .createCompletion({
        model: 'text-davinci-001',
        prompt: prompt,
        max_tokens: 256,

        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        return response.data.choices[0].text;
      })
      .catch((error) => {
        return error.message as string;
      });
  }
}
