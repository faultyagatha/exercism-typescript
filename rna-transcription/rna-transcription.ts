interface ITranscriptorMap {
  [index: string]: string
}
const map: ITranscriptorMap = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

class Transcriptor {
  toRna(dna: string): string {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
      if (!map[dna[i]]) {
        throw new Error('Invalid input DNA.');
      }
      rna += map[dna[i]];
    }
    return rna;
  }
}

export default Transcriptor

//https://exercism.org/tracks/typescript/exercises/rna-transcription/solutions/pads