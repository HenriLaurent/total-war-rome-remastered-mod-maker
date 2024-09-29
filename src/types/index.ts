export type WeaponType =
  | "no"
  | "missile"
  | "melee"
  | "thrown"
  | "siege_missile";

export type TechType = "blade" | "simple" | "archery" | "other" | "no";

export type MissileType =
  | "no"
  | "head"
  | "arrow"
  | "stone"
  | "javelin"
  | "pilum"
  | "boulder"
  | "ballista";

export type SoundType = "none" | "knife" | "spear" | "sword" | "mace" | "axe";

export type DamageType = "no" | "piercing" | "blunt";

export type UnitAttributes =
  | "sea_faring"
  | "hide_forest"
  | "hide_improved_forest"
  | "hide_long_grass"
  | "hide_anywhere"
  | "can_sap"
  | "frighten_foot"
  | "frighten_mounted"
  | "can_run_amok"
  | "general_unit"
  | "cantabrian_circle"
  | "no_custom"
  | "command"
  | "mercenary_unit";

export type Resource = string;

export type SettlementType =
  | "village"
  | "town"
  | "large_town"
  | "city"
  | "large_city"
  | "huge_city";

export type BuildingRequirement = {
  factions?: string[];
  not?: {
    factions?: string[];
  };
  no_building_tagged?: string;
  no_other_temple?: boolean;
  major_event?: string;
  is_toggled?: string;
  hidden_resource?: string;
  resource?: Resource;
  building_present_min_level?: {
    [buildingName: string]: string;
  };
};

type CapabilityEffect = {
  bonus?: number;
};

type Capability = {
  recruit?: string[];
  happiness_bonus?: CapabilityEffect;
  law_bonus?: CapabilityEffect;
  population_growth_bonus?: CapabilityEffect;
  population_health_bonus?: CapabilityEffect;
  trade_base_income_bonus?: CapabilityEffect;
  farming_level?: CapabilityEffect;
  recruits_exp_bonus?: CapabilityEffect;
  recruits_morale_bonus?: CapabilityEffect;
  weapon_simple?: CapabilityEffect;
  weapon_bladed?: CapabilityEffect;
  weapon_missile?: CapabilityEffect;
  armour?: CapabilityEffect;
  wall_level?: number;
  tower_level?: number;
  gate_strength?: number;
  gate_defences?: number;
  trade_fleet?: number;
  mine_resource?: number;
  road_level?: number;
  agent?: string[];
  agent_limit_settlement?: string[];
  stage_games?: number;
  stage_races?: number;
  dummy?: CapabilityEffect;
};

export type BuildingLevel = {
  name: string;
  requires: BuildingRequirement;
  capability: Capability;
  construction: number;
  cost: number;
  settlement_min: SettlementType;
  upgrades: string[];
};

export type Building = {
  name: string;
  tag?: string;
  icon: string;
  classification?: string;
  levels: {
    [levelName: string]: BuildingLevel;
  };
};

export type Unit = {
  type: string;
  dictionary: string;
  category: string;
  class: string;
  voice_type: string;
  voice_indexes: number[];
  soldier: {
    model: string;
    count: number;
    extras: number;
    mass: number;
  };
  mount?: string;
  mount_effect?: {
    [key: string]: number;
  };
  officer?: string;
  animal?: string;
  engine?: string;
  attributes: string[];
  formation: {
    spacing: number[];
    ranks: number;
    types: string[];
  };
  stat_health: [number, number];
  stat_pri: {
    attack: number;
    charge_bonus: number;
    missile_type: string;
    range: number;
    ammunition: number;
    weapon_type: string;
    tech_type: string;
    damage_type: string;
    sound_type: string;
    attack_delay: number;
    rate?: number;
  };
  stat_pri_attr: string | string[];
  stat_sec: {
    attack: number;
    charge_bonus: number;
    missile_type: string;
    range: number;
    ammunition: number;
    weapon_type: string;
    tech_type: string;
    damage_type: string;
    sound_type: string;
    attack_delay: number;
  };
  stat_sec_attr: string | string[];
  stat_pri_armour:
    | [number, number, number, string]
    | [number, number, number, string, string];
  stat_sec_armour: [number, number, string];
  stat_heat: number;
  stat_ground: number[];
  stat_mental: [number, string, string];
  stat_charge_dist: number;
  stat_fire_delay: number;
  stat_food: number[];
  stat_cost: number[];
  ownership: string[];
  ethnicity: Array<{
    faction: string;
    region: string;
    options?: string[];
  }>;
  tattoo_color?: string;
  hair_color?: string;
  hair_style?: number;
  is_female?: boolean;
  rebalance_statblock?: Partial<Unit>;
};

export type Faction = {
  name: string;
  string: string;
  description: string;
  culture: string;
  ethnicity: string;
  tags: string[];
  namelists: {
    men: string;
    women: string;
    surnames: string;
  };
  logos: {
    "loading screen icon": string;
    "standard index": number;
    "rebel standard index": number;
    "logo index": number;
    "rebel logo index": number;
    "strat symbol model": string;
    "strat rebel symbol model": string;
  };
  colours: {
    primary: [number, number, number];
    secondary: [number, number, number];
    "family tree": {
      background: [number, number, number];
      font: [number, number, number];
      "selected line": [number, number, number];
      "unselected line": [number, number, number];
    };
  };
  movies: {
    intro: string;
    victory: string;
    defeat: string;
  };
  "available in custom battles": boolean;
  "prefer naval invasions": boolean;
  "default battle ai personality": string;
  "allow reproduction": boolean;
};

export type Category =
  | "infantry"
  | "missile"
  | "spearmen"
  | "heavy"
  | "light"
  | "cavalry"
  | "artillery";

export type Region = {
  faction: string;
  regionName: string;
  capital: string;
  defaultCulture: string;
  rebelName: string;
  color: {
    r: number;
    g: number;
    b: number;
  };
  resources: string;
  farmingLevel: number;
  campaignValue: number;
};
