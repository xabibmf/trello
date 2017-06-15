class BoardsController < ApplicationController
  before_action :set_boards, only: :new
  before_action :set_board, only: :update
  before_action :set_lists, only: :update

  def new
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      respond_to do |format|
        format.html
        format.json { render json: @board }
      end
    else

    end
  end

  def update
    @card = Card.new
    @activity = Activity.new
    if @board.update(board_params)
      render template: "lists/new"
    else
    end
  end

  def destroy
    board = Board.find(delete_params[:id])
    board.lists.each do |list|
      list.cards.each do |card|
        card.activities.destroy_all
      end
      list.cards.destroy_all
    end
    board.lists.destroy_all
    board.delete
    set_boards
    render :new
  end

  private

  def board_params
    params.require(:board).permit(:name, :color).merge(user: current_user)
  end

  def delete_params
    params.permit(:id)
  end

  def set_boards
    @board = Board.new
    @boards = current_user.boards
  end

  def set_board
    @board = Board.find(params[:id])
  end

  def set_lists
    @lists = @board.lists
    @list = List.new
  end
end
