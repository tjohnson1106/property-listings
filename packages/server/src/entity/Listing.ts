import * as bcrypt from "bcryptjs";
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert
} from "typeorm";

@Entity("listings")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("text") pictureUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("int") price: number;

  @Column("double precision") latitude: number;

  @Column("double precision") longitude: number;

  @Column("int") beds: number;

  @Column("int") guests: number;

  @Column("text", { array: true })
  amenities: string[];
}
