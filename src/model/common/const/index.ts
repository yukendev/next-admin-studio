export const MODELS = {
  ProfileCard: {
    label: "プロフィールカード",
    color: "rgba(227, 226, 224, 0.5)",
  },
} as const;

export type ModelName = keyof typeof MODELS;

type ModelPathMappingEntry = {
  /**
   * @example
   * ModelPathMapping.ProfileCard.pathToId(path)
   * "/profile-cards/1" => "1"
   */
  pathToId: (path: string) => string | undefined;
  /**
   * @example
   * ModelPathMapping.ProfileCard.idToPath(id)
   * "1" => "/profile-cards/1"
   */
  idToPath: (id: string) => string;
  /**
   * @example
   * ModelPathMapping.ProfileCard.indexPath
   * => "/profile-cards"
   */
  indexPath: string;
};

export const ModelPathMapping = {
  ProfileCard: {
    pathToId: (path: string) => path.match(/\/profile-cards\/(.+)/)?.[1],
    idToPath: (id: string) => `/profile-cards/${id}`,
    indexPath: "/profile-cards",
  },
} as const satisfies Record<ModelName, ModelPathMappingEntry>;
