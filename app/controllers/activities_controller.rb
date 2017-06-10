class ActivitiesController < ApplicationController
  def create
    @activity = Activity.new(activity_params)
    if @activity.save
    else
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:memo).merge(params.permit(:card_id))
  end
end
