// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  uuid
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => name);


export const posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const workspaces = createTable(
  "workspaces",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    userID: varchar("user_id", { length: 256 }).notNull(),
    workspaceName: varchar("workspace_name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (workspace) => ({
    workspaceIDIndex: index("workspace_id_idx").on(workspace.id),
  })
);

export const bases = createTable(
  "bases",
  {
    id: integer("id").notNull().primaryKey().generatedByDefaultAsIdentity(),
    baseName: varchar("base_name", { length: 256 }).notNull(),
    workspaceID: integer("workspace_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (base) => ({
    baseIDIndex: index("base_id_idx").on(base.id),
  })
);

export const tables = createTable(
  "tables",
  {
    id: uuid("id").notNull().primaryKey().default(sql`uuid_generate_v4()`),
    tableName: varchar("table_name", { length: 256 }).notNull(),
    baseID: integer("base_id"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (table) => ({
    tableIDIndex: index("table_id_idx").on(table.id),
  })
);
