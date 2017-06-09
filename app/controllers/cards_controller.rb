class CardsController < ApplicationController
  def create
    @list = Card.new(card_params)
    if @list.save
    else
    end
  end

  private

  def card_params
    params.require(:card).permit(:name).merge(params.permit(:list_id))
  end
end
