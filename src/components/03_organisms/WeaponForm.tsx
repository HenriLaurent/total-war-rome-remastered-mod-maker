import {
  DamageType,
  MissileType,
  SoundType,
  TechType,
  WeaponType,
} from "../../types";
import SelectDamageType from "../02_molecules/SelectDamageType";
import SelectMissiletype from "../02_molecules/SelectMissileType";
import SelectSoundType from "../02_molecules/SelectSoundType";
import SelectTechtype from "../02_molecules/SelectTechType";
import SelectWeapontype from "../02_molecules/SelectWeaponType";
import Slider from "../02_molecules/Slider";

export type WeaponDescriptionProps = {
  weaponType: WeaponType;
  missileType: MissileType;
  techType: TechType;
  damageType: DamageType;
  soundType: SoundType;

  attack: number;
  charge: number;
  range: number;
  ammunition: number;
  attackDelay: number;

  onWeaponTypeChange: (newWeaponType: WeaponType) => void;
  onMissileTypeChange: (newMissileType: MissileType) => void;
  onTechTypeChange: (newTechType: TechType) => void;
  onDamageTypeChange: (newDamageType: DamageType) => void;
  onSoundTypeChange: (newSoundType: SoundType) => void;

  onAttackChange: (newAttack: number) => void;
  onChargeChange: (newCharge: number) => void;
  onRangeChange: (newRange: number) => void;
  onAmmunitionChange: (newAmmunition: number) => void;
  onAttackDelayChange: (newAttackDelay: number) => void;
};

export default function WeaponDescription({
  weaponType,
  missileType,
  techType,
  damageType,
  soundType,
  attack,
  charge,
  range,
  ammunition,
  attackDelay,
  onWeaponTypeChange,
  onMissileTypeChange,
  onTechTypeChange,
  onDamageTypeChange,
  onSoundTypeChange,
  onAttackChange,
  onChargeChange,
  onRangeChange,
  onAmmunitionChange,
  onAttackDelayChange,
}: WeaponDescriptionProps) {
  return (
    <div className="grid grid-cols-2 gap-16">
      <div className="flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <p className="font-cinzel font-semibold">Type</p>
          <SelectWeapontype
            defaultValue={weaponType}
            onChange={onWeaponTypeChange}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-cinzel font-semibold">Missile type</p>
          <SelectMissiletype
            defaultValue={missileType}
            onChange={onMissileTypeChange}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-cinzel font-semibold">Tech type</p>
          <SelectTechtype defaultValue={techType} onChange={onTechTypeChange} />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-cinzel font-semibold">Damage type</p>
          <SelectDamageType
            defaultValue={damageType}
            onChange={onDamageTypeChange}
          />
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="font-cinzel font-semibold">Sound type</p>
          <SelectSoundType
            defaultValue={soundType}
            onChange={onSoundTypeChange}
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 ">
          <p className="text-base font-semibold font-cinzel self-center">
            Melee
          </p>
          <div className="col-span-2 self-center py-4">
            <Slider
              min={0}
              max={12}
              value={attack}
              onChange={(newStatPriAttack) => onAttackChange(newStatPriAttack)}
            />
          </div>
          <span className="text-lg font-semibold font-cinzel self-center">
            {attack}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <p className="text-base font-semibold font-cinzel self-center">
            Charge
          </p>
          <div className="col-span-2 self-center py-4">
            <Slider
              min={0}
              max={12}
              value={charge}
              onChange={(newStatPriChargeBonus) =>
                onChargeChange(newStatPriChargeBonus)
              }
            />
          </div>
          <span className="text-lg font-semibold font-cinzel self-center">
            {charge}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <p className="text-base font-semibold font-cinzel self-center">
            Range
          </p>
          <div className="col-span-2 self-center py-4">
            <Slider
              min={0}
              max={120}
              value={range}
              onChange={(newStatPriRange) => onRangeChange(newStatPriRange)}
            />
          </div>
          <span className="text-lg font-semibold font-cinzel self-center">
            {range}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <p className="text-base font-semibold font-cinzel self-center">
            Ammunition
          </p>
          <div className="col-span-2 self-center py-4">
            <Slider
              min={0}
              max={120}
              value={ammunition}
              onChange={(newStatPriAmmunition) =>
                onAmmunitionChange(newStatPriAmmunition)
              }
            />
          </div>
          <span className="text-lg font-semibold font-cinzel self-center">
            {ammunition}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <p className="text-base font-semibold font-cinzel self-center">
            Attack delay
          </p>
          <div className="col-span-2 self-center py-4">
            <Slider
              min={0}
              max={100}
              value={attackDelay}
              onChange={(newStatPriAttackDelay) =>
                onAttackDelayChange(newStatPriAttackDelay)
              }
            />
          </div>
          <span className="text-lg font-semibold font-cinzel self-center">
            {attackDelay}
          </span>
        </div>
      </div>
    </div>
  );
}
