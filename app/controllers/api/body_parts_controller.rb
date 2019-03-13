class Api::BodyPartsController < ApplicationController
  def index
    @body_parts = BodyPart.all
    render 'index.json.jbuilder'
  end

  def create
    @body_part = BodyPart.new(
                              name: params[:name],
                              muscle_group: params[:muscle_group]
                              )

    if @body_part.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @body_part.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @body_part = BodyPart.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @body_part = BodyPart.find(params[:id])

    @body_part.name = params[:name] || @body_part.name
    @body_part.muscle_group = params[:muscle_group] || @body_part.muscle_group

    if @body_part.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @body_part.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    body_part = BodyPart.find(params[:id])
    body_part.destroy
    render json: {message: "Successfully removed body_part"}
  end
end
