class ListsController < ApplicationController
  before_action :set_board, only: [:new, :create, :update, :destroy]
  before_action :set_lists, only: [:new, :destroy]
  before_action :set_list, only: :update
  before_action :set_new_model, only: [:new, :destroy]

  def new
    set_new_model
  end

  def create
    @card = Card.new
    @list = List.new(list_params)
    if @list.save

    else

    end
  end

  def update
    if @list.update(list_params)
    else
    end
  end

  def destroy
    @target_list = List.find(delete_params[:id])
    @target_list.cards.each do |card|
      card.activities.destroy_all
    end
    @target_list.cards.destroy_all
    @target_list.move_to_bottom
    @target_list.delete
    set_new_model
  end

  def sort
    target_list = List.find(sort_params[:list_id])
    target_list.insert_at(sort_params[:position].to_i + 1)
    render body: nil
  end

  private

  def list_params
    params.require(:list).permit(:name).merge(board: @board)
  end

  def sort_params
    params.permit(:board_id, :list_id, :position)
  end

  def delete_params
    params.permit(:id)
  end

  def set_board
    @board = Board.find(params[:board_id])
  end

  def set_lists
    @lists = @board.lists
  end

  def set_list
    @list = List.find(params[:id])
  end

  def set_new_model
    @list = List.new
    @card = Card.new
    @activity = Activity.new
  end
end
