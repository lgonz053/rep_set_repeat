class Api::ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all.order(:name)
    render 'index.json.jbuilder'
  end

  def create
    @exercise = Exercise.create_with(
                                      description: params[:description],
                                      video_url: params[:video_url],
                                      volume_per_exercise: params[:volume_per_exercise]
                                    ).find_or_create_by(
                                      name: params[:name].titleize
                                    )

    render 'show.json.jbuilder'
  end

  def show
    @exercise = Exercise.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @exercise = Exercise.find(params[:id])

    @exercise.name = params[:name] || @exercise.name
    @exercise.description = params[:description] || @exercise.description
    @exercise.video_url = params[:video_url] || @exercise.video_url
    @exercise.volume_per_exercise = params[:volume_per_exercise] || @exercise.volume_per_exercise

    if @exercise.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @exercise.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    exercise = exercise.find(params[:id])
    exercise.destroy
    render json: {message: "Successfully removed exercise"}
  end
end
