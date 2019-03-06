class Api::WorkoutsController < ApplicationController

  def index
    @workouts = current_user.workouts
    render 'index.json.jbuilder'
  end

  def create
    @workout = Workout.new(
                      user_id: current_user.id,
                      muscle_group: params[:muscle_group],
                      time_limit: params[:time_limit]
                    )

    if @workout.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @workout.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @workout = Workout.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @workout = Workout.find(params[:id])

    @workout.muscle_group = params[:muscle_group] || @workout.muscle_group
    @workout.time_limit = params[:time_limit] || @workout.time_limit

    if @workout.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @workout.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    workout = workout.find(params[:id])
    workout.destroy
    render json: {message: "Successfully removed workout"}
  end
end
