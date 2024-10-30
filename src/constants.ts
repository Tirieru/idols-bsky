import "dotenv/config";

export const DID = process.env.DID ?? "";
export const SIGN_KEY = process.env.SIGN_KEY ?? "";
export const PORT = Number(process.env.PORT ?? 4001);
export const URL = process.env.URL ?? "wss://jetstream.atproto.tools/subscribe";
export const MAXLABELS = 5;
export const DELETE = "3l3e2jo3mnf2o";
export const POSTS: Record<string, string> = {
  "3l7jgqeyrvc24": "honoka",
  "3l7jgradbyu2a": "kotori",
  "3l7jgryy5ei2b": "umi",
  "3l7jgsp5al42q": "eli",
  "3l7jgtbxjcc24": "nozomi",
  "3l7jgtvin4625": "nico",
  "3l7jgukzbag25": "maki",
  "3l7jgvbtybo2b": "rin",
  "3l7jgvzkjlq24": "hanayo",

  "3l7jgz233p62b": "chika",
  "3l7jh22lpnj2s": "riko",
  "3l7jh2qssht2d": "you",
  "3l7jh3ldj7h2q": "dia",
  "3l7jh45xols2q": "mari",
  "3l7jh5imdip2b": "kanan",
  "3l7jh6av7wx24": "yohane",
  "3l7jh6v5dv72q": "ruby",
  "3l7jh7k5ywf2a": "hanamaru",

  "3l7jhpi3hxz2y": "ayumu",
  "3l7jhqarn4z2y": "setsuna",
  "3l7jhqtmnnl25": "ai",
  "3l7jhrm2o6e2q": "lanzhu",
  "3l7jhsfzgzl25": "kanata",
  "3l7jhsz2h6m2a": "karin",
  "3l7jhtlmekb2y": "emma",
  "3l7jhu524fa2p": "mia",
  "3l7jhuucpxt25": "shizuku",
  "3l7jhvhuhv52o": "kasumi",
  "3l7jhw4od542q": "rina",
  "3l7jhwzu2bz2y": "shioriko",
  "3l7oxvw4qbk2w": "yuu",

  "3l7jihauvfj2b": "kaho",
  "3l7jiipi44c2z": "sayaka",
  "3l7jijis6gz2a": "rurino",
  "3l7jikdnbcx24": "kozue",
  "3l7jil4ydqz2a": "tsuzuri",
  "3l7jilommbj2s": "megumi",
  "3l7jimk3kpx2q": "ginko",
  "3l7jin7zms42q": "kosuzu",
  "3l7jinqwqb724": "hime",

  "3l7k5qj47pa2p": "kanon",
  "3l7k5reytvm2s": "keke",
  "3l7k5sajw7e2o": "sumire",
  "3l7k5szwqqg2z": "chisato",
  "3l7k5tuwml72a": "ren",
  "3l7k5vva6vd2b": "shiki",
  "3l7k5wkx7j42o": "mei",
  "3l7k5xlhhjv2b": "natsumi",
  "3l7k5y5me3d2b": "kinako",
  "3l7k5yuzgxg2z": "tomari",
  "3l7k5zmsniv2b": "margarete",
};
