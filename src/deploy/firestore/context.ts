import {RulesDeploy} from "../../rulesDeploy";

export interface Context {
  projectId: string;
  firestore: {
    indexes: IndexContext[];
    rules: RulesContext[];
    rulesDeploy?: RulesDeploy;
  };
  firestoreIndexes?: {};
  firestoreRules?: {};
}

export interface RulesContext {
  databaseId: string;
  rulesFile: string;
}

export interface IndexContext {
  databaseId: string;
  indexesFileName: string;
  indexesRawSpec: any; // could be the old v1beta1 indexes spec or the new v1/v1 format
}
