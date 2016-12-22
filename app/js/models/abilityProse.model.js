import Model from "../lib/model";

import Ability from "./ability.model";
import Language from "./language.model";

export default class AbilityProse extends Model {

  constructor(options = {
    fillable: [],
    hidden: [],
    database: 'pokemon'
  }) {

    super(options);
  }

  ability() {
    return this.has(Ability, 'id', 'ability_id');
  }

  language() {
    return this.has(Language, 'id', 'local_language_id');
  }

}

AbilityProse.prototype.table = 'ability_prose';
