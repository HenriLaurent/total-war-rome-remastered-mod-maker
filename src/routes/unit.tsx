import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Textarea from "../components/02_molecules/Textarea";
import Textfield from "../components/02_molecules/Tetxfield";
import WeaponDescription from "../components/03_organisms/WeaponForm";
import {
  DamageType,
  MissileType,
  SoundType,
  TechType,
  Unit as UnitType,
  UnitAttributes,
  WeaponType,
} from "../types";
import { getUnit } from "../api/units";
import AttributeList from "../components/03_organisms/AttributeList";
import UnitModelCarousel from "../components/03_organisms/UnitModelCarousel";

type LoaderData = {
  unit: UnitType;
};

export async function loader({ params }: LoaderFunctionArgs) {
  const unitDictName = params.unit;
  if (!unitDictName) {
    throw new Error("Unit parameter is missing");
  }
  const unit = await getUnit(unitDictName);
  return { unit };
}

export default function Unit() {
  const params = useParams();
  const { unit } = useLoaderData() as LoaderData;

  const [unitInfo, setUnitInfo] = useState(unit);

  const handleCheckAttribute = (attribute: UnitAttributes) => {
    if (unitInfo.attributes.filter((a) => a === attribute).length > 0) {
      setUnitInfo((prev) => ({
        ...prev,
        attributes: prev.attributes.filter((a) => a !== attribute),
      }));
    } else {
      setUnitInfo((prev) => ({
        ...prev,
        attributes: [...prev.attributes, attribute],
      }));
    }
  };

  const onWeaponTypeChange = (
    newWeaponType: WeaponType,
    firstWeapon: boolean
  ) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        weapon_type: firstWeapon ? newWeaponType : prev.stat_pri.weapon_type,
      },
      stat_sec: {
        ...prev.stat_sec,
        weapon_type: !firstWeapon ? newWeaponType : prev.stat_sec.weapon_type,
      },
    }));
  };

  const onTechTypeChange = (newTechType: TechType, firstWeapon: boolean) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        tech_type: firstWeapon ? newTechType : prev.stat_pri.tech_type,
      },
      stat_sec: {
        ...prev.stat_sec,
        tech_type: !firstWeapon ? newTechType : prev.stat_sec.tech_type,
      },
    }));
  };

  const onMissileTypeChange = (
    newMissileType: MissileType,
    firstWeapon: boolean
  ) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        missile_type: firstWeapon ? newMissileType : prev.stat_pri.missile_type,
      },
      stat_sec: {
        ...prev.stat_sec,
        missile_type: !firstWeapon
          ? newMissileType
          : prev.stat_sec.missile_type,
      },
    }));
  };

  const onDamageTypeChange = (
    newDamageType: DamageType,
    firstWeapon: boolean
  ) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        damage_type: firstWeapon ? newDamageType : prev.stat_pri.damage_type,
      },
      stat_sec: {
        ...prev.stat_sec,
        damage_type: !firstWeapon ? newDamageType : prev.stat_sec.damage_type,
      },
    }));
  };

  const onSoundTypeChange = (newSoundType: SoundType, firstWeapon: boolean) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        sound_type: firstWeapon ? newSoundType : prev.stat_pri.sound_type,
      },
      stat_sec: {
        ...prev.stat_sec,
        sound_type: !firstWeapon ? newSoundType : prev.stat_sec.sound_type,
      },
    }));
  };

  const onAttackChange = (newStatPriAttack: number, firstWeapon: boolean) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        attack: firstWeapon
          ? Math.round(newStatPriAttack)
          : prev.stat_pri.attack,
      },
      stat_sec: {
        ...prev.stat_sec,
        attack: !firstWeapon
          ? Math.round(newStatPriAttack)
          : prev.stat_sec.attack,
      },
    }));
  };

  const onChargeChange = (
    newStatPriChargeBonus: number,
    firstWeapon: boolean
  ) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        charge_bonus: firstWeapon
          ? Math.round(newStatPriChargeBonus)
          : prev.stat_pri.charge_bonus,
      },
      stat_sec: {
        ...prev.stat_sec,
        charge_bonus: !firstWeapon
          ? Math.round(newStatPriChargeBonus)
          : prev.stat_sec.charge_bonus,
      },
    }));
  };

  const onRangeChange = (newStatPriRange: number, firstWeapon: boolean) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        range: firstWeapon ? Math.round(newStatPriRange) : prev.stat_pri.range,
      },
      stat_sec: {
        ...prev.stat_sec,
        range: !firstWeapon ? Math.round(newStatPriRange) : prev.stat_sec.range,
      },
    }));
  };

  const onAmmunitionChange = (
    newStatPriAmmunition: number,
    firstWeapon: boolean
  ) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        ammunition: firstWeapon
          ? Math.round(newStatPriAmmunition)
          : prev.stat_pri.ammunition,
      },
      stat_sec: {
        ...prev.stat_sec,
        ammunition: !firstWeapon
          ? Math.round(newStatPriAmmunition)
          : prev.stat_sec.ammunition,
      },
    }));
  };

  const onAttackDelayChange = (
    newStatPriAttackDelay: number,
    firstWeapon: boolean
  ) => {
    setUnitInfo((prev) => ({
      ...prev,
      stat_pri: {
        ...prev.stat_pri,
        attack_delay: firstWeapon
          ? Math.round(newStatPriAttackDelay)
          : prev.stat_pri.attack_delay,
      },
      stat_sec: {
        ...prev.stat_sec,
        attack_delay: !firstWeapon
          ? Math.round(newStatPriAttackDelay)
          : prev.stat_sec.attack_delay,
      },
    }));
  };

  useEffect(() => {
    setUnitInfo(unit);
  }, [unit]);

  return (
    <div className="flex gap-1 my-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-col gap-8 bg-cover bg-center bg-no-repeat p-4 rounded-lg"
          style={{ backgroundImage: `url("/assets/ui/bg_paper.png")` }}
        >
          <div className="flex justify-start">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold font-cinzel">
                Unit details
              </h3>
              <img src="/assets/ui/bar.png" className="w-48" />
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex-3 flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="flex-1 font-cinzel font-semibold">Unit name</p>
                <Textfield value={unit.dictionary} onChange={() => {}} />
              </div>
              <div className="flex justify-between">
                <p className="flex-1 font-cinzel font-semibold">
                  Unit short description
                </p>
                <Textarea
                  value={unit.dictionary}
                  onChange={() => {}}
                  maxRows={2}
                />
              </div>
              <div className="flex justify-between">
                <p className="flex-1 font-cinzel font-semibold">
                  Unit description
                </p>
                <Textarea
                  value={unit.dictionary}
                  onChange={() => {}}
                  maxRows={12}
                />
              </div>
            </div>
            <div className="flex-1">
              <UnitModelCarousel
                unitInfos={unitInfo.ethnicity.map((e) => {
                  return {
                    imagePath: `/assets/unit_icons/${e.faction}/${params.unit}_info.png`,
                    factionIconPath: `/assets/faction_icons/${e.faction}.png`,
                  };
                })}
              />
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat p-4 space-y-8 rounded-lg"
          style={{ backgroundImage: `url("/assets/ui/bg_paper.png")` }}
        >
          <div className="flex justify-start">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold font-cinzel">Attibutes</h3>
              <img src="/assets/ui/bar.png" className="w-48" />
            </div>
          </div>
          <AttributeList
            selectedAttributes={unitInfo.attributes as UnitAttributes[]}
            handleCheckAttribute={handleCheckAttribute}
          />
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat p-4 space-y-4 rounded-lg"
          style={{ backgroundImage: `url("/assets/ui/bg_paper.png")` }}
        >
          <div className="flex justify-start">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold font-cinzel">Main weapon</h3>
              <img src="/assets/ui/bar.png" className="w-48" />
            </div>
          </div>
          <WeaponDescription
            weaponType={unitInfo.stat_pri.weapon_type as WeaponType}
            missileType={unitInfo.stat_pri.missile_type as MissileType}
            techType={unitInfo.stat_pri.tech_type as TechType}
            damageType={unitInfo.stat_pri.damage_type as DamageType}
            soundType={unitInfo.stat_pri.sound_type as SoundType}
            attack={unitInfo.stat_pri.attack}
            charge={unitInfo.stat_pri.charge_bonus}
            range={unitInfo.stat_pri.range}
            ammunition={unitInfo.stat_pri.ammunition}
            attackDelay={unitInfo.stat_pri.attack_delay}
            onWeaponTypeChange={(newWeaponType) =>
              onWeaponTypeChange(newWeaponType, true)
            }
            onMissileTypeChange={(newMissileType) =>
              onMissileTypeChange(newMissileType, true)
            }
            onTechTypeChange={(newTechType) =>
              onTechTypeChange(newTechType, true)
            }
            onDamageTypeChange={(newDamageType) =>
              onDamageTypeChange(newDamageType, true)
            }
            onSoundTypeChange={(newSoundType) =>
              onSoundTypeChange(newSoundType, true)
            }
            onAttackChange={(newAttack) => onAttackChange(newAttack, true)}
            onChargeChange={(newCharge) => onChargeChange(newCharge, true)}
            onRangeChange={(newRange) => onRangeChange(newRange, true)}
            onAmmunitionChange={(newAmmunition) =>
              onAmmunitionChange(newAmmunition, true)
            }
            onAttackDelayChange={(newAttackDelay) =>
              onAttackDelayChange(newAttackDelay, true)
            }
          />
        </div>
        {unitInfo.stat_sec.attack !== 0 && (
          <div
            className="bg-cover bg-center bg-no-repeat p-4 space-y-4 rounded-lg"
            style={{ backgroundImage: `url("/assets/ui/bg_paper.png")` }}
          >
            <h3 className="text-lg font-semibold font-cinzel">
              Secondary weapon
            </h3>
            <WeaponDescription
              weaponType={unitInfo.stat_sec.weapon_type as WeaponType}
              missileType={unitInfo.stat_sec.missile_type as MissileType}
              techType={unitInfo.stat_sec.tech_type as TechType}
              damageType={unitInfo.stat_sec.damage_type as DamageType}
              soundType={unitInfo.stat_sec.sound_type as SoundType}
              attack={unitInfo.stat_sec.attack}
              charge={unitInfo.stat_sec.charge_bonus}
              range={unitInfo.stat_sec.range}
              ammunition={unitInfo.stat_sec.ammunition}
              attackDelay={unitInfo.stat_sec.attack_delay}
              onWeaponTypeChange={(newWeaponType) =>
                onWeaponTypeChange(newWeaponType, false)
              }
              onMissileTypeChange={(newMissileType) =>
                onMissileTypeChange(newMissileType, false)
              }
              onTechTypeChange={(newTechType) =>
                onTechTypeChange(newTechType, false)
              }
              onDamageTypeChange={(newDamageType) =>
                onDamageTypeChange(newDamageType, false)
              }
              onSoundTypeChange={(newSoundType) =>
                onSoundTypeChange(newSoundType, false)
              }
              onAttackChange={(newAttack) => onAttackChange(newAttack, false)}
              onChargeChange={(newCharge) => onChargeChange(newCharge, false)}
              onRangeChange={(newRange) => onRangeChange(newRange, false)}
              onAmmunitionChange={(newAmmunition) =>
                onAmmunitionChange(newAmmunition, false)
              }
              onAttackDelayChange={(newAttackDelay) =>
                onAttackDelayChange(newAttackDelay, false)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
