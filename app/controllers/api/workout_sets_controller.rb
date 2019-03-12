class Api::WorkoutSetsController < ApplicationController
  def index
    @workout_sets = WorkoutSet.all
    render 'index.json.jbuilder'
  end

  def create
    @workout_set = WorkoutSet.new(
                                  workout_id: params[:workout_id],
                                  exercise_id: params[:exercise_id],
                                  groups: params[:groups],
                                  reps: params[:reps],
                                  weight: params[:weight]
                                  )

    if @workout_set.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @workout_set.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @workout_set = WorkoutSet.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @workout_set = WorkoutSet.find(params[:id])

    @workout_set.groups = params[:groups] || @workout_set.groups
    @workout_set.reps = params[:reps] || @workout_set.reps
    @workout_set.weight = params[:weight] || @workout_set.weight
    @workout_set.total_volume = params[:total_volume] || @workout_set.total_volume

    if @workout_set.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @workout_set.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    workout_set = workout_set.find(params[:id])
    workout_set.destroy
    render json: {message: "Successfully removed workout_set"}
  end
end
