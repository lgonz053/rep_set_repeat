# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_06_212439) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "body_correlations", force: :cascade do |t|
    t.integer "body_part_id"
    t.integer "exercise_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "body_parts", force: :cascade do |t|
    t.string "name"
    t.integer "muscle_group"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "video_url"
    t.integer "volume_per_exercise"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_sets", force: :cascade do |t|
    t.integer "workout_id"
    t.integer "exercise_id"
    t.integer "groups"
    t.integer "reps"
    t.integer "weight"
    t.integer "total_volume"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "muscle_group"
    t.decimal "time_limit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
