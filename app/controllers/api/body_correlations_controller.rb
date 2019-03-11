class Api::BodyCorrelationsController < ApplicationController

  def index
    @body_correlations = BodyCorrelation.all
    render 'index.json.jbuilder'
  end

  def create
    @body_correlation = BodyCorrelation.new(
                                            body_part_id: params[:body_part_id],
                                            exercise_id: params[:exercise_id]
                                           )

    if @body_correlation.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @body_correlation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @body_correlation = BodyCorrelation.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @body_correlation = BodyCorrelation.find(params[:id])

    @body_correlation.body_part_id = params[:body_part_id] || @body_correlation.body_part_id
    @body_correlation.exercise_id = params[:exercise_id] || @body_correlation.exercise_id

    if @body_correlation.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @body_correlation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    body_correlation = body_correlation.find(params[:id])
    body_correlation.destroy
    render json: {message: "Successfully removed body_correlation"}
  end
end
