import git from "git-rev-sync";

const rootPath = "../..";

export const project = {
  branch: git.branch(rootPath),
  date: git.date().toString(),
  long: git.long(rootPath),
  message: git.message(),
  short: git.short(rootPath),
};
