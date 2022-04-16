type Entity = { type: "user" } | { type: "post" } | { type: "comment" };

type EntityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

const user: EntityWithId = { type: "user", userId: "user-id" };
const post: EntityWithId = { type: "post", postId: "post-id" };
const comment: EntityWithId = { type: "comment", commentId: "comment-id" };

export {};
