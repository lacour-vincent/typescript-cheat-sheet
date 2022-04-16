type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};

interface Post {
  id: string;
  comments: Array<{ value: string }>;
  data: {
    name: string;
    description: string;
  };
}

const post: DeepPartial<Post> = {
  id: "post-id",
  data: { name: "data-name" },
};

export {};
