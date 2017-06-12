class ActivitiesController < ApplicationController
  before_action :set_activity, only: :update

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
    else
    end
  end

  def update
    if @activity.update(activity_params)
    else
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:memo).merge(params.permit(:card_id))
  end

  def set_activity
    @activity = Activity.find(params[:id])
  end
end
